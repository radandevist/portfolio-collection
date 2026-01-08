import { useState, useEffect, useCallback } from "react";
import { cn } from "~/lib/utils";

interface TypeWriterProps {
  text: string | string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  loop?: boolean;
  cursor?: boolean;
  className?: string;
  onComplete?: () => void;
}

export function TypeWriter({
  text,
  speed = 50,
  deleteSpeed = 30,
  delay = 2000,
  loop = false,
  cursor = true,
  className,
  onComplete,
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textArrayIndex, setTextArrayIndex] = useState(0);

  const texts = Array.isArray(text) ? text : [text];
  const currentText = texts[textArrayIndex];

  const handleTyping = useCallback(() => {
    if (isDeleting) {
      if (displayText.length > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
      } else {
        setIsDeleting(false);
        setTextArrayIndex((prev) => (prev + 1) % texts.length);
        setCurrentIndex(0);
      }
    } else {
      if (currentIndex < currentText.length) {
        setDisplayText((prev) => prev + currentText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      } else if (loop && texts.length > 1) {
        setTimeout(() => {
          setIsDeleting(true);
        }, delay);
        return;
      } else if (!loop) {
        onComplete?.();
        return;
      }
    }
  }, [
    currentIndex,
    currentText,
    displayText,
    isDeleting,
    loop,
    texts.length,
    delay,
    onComplete,
  ]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deleteSpeed : speed
    );
    return () => clearTimeout(timeout);
  }, [handleTyping, isDeleting, deleteSpeed, speed]);

  return (
    <span className={cn("inline", className)}>
      {displayText}
      {cursor && (
        <span className="animate-blink text-accent-amber">|</span>
      )}
    </span>
  );
}
