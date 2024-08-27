declare module 'react-typing-effect' {
    import { FC } from 'react';
  
    interface TypingEffectProps {
      text: string[];
      speed?: number;
      eraseSpeed?: number;
      eraseDelay?: number;
      typingDelay?: number;
      cursorRenderer?: (cursor: string) => JSX.Element;
    }
  
    const TypingEffect: FC<TypingEffectProps>;
  
    export default TypingEffect;
  }
  