import { useCallback } from 'react';

export function useFlagEmoji() {
  const getFlagEmoji = useCallback((flag = []) => {
    const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
      .map((char) => String.fromCharCode(char - 127397).toLowerCase())
      .join("");
    return `https://flagcdn.com/24x18/${countryCode}.png`;
  }, []);

  return getFlagEmoji;
} 