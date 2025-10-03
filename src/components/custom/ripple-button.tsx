"use client";

import React from 'react';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface RippleButtonProps extends ButtonProps {
  asChild?: boolean;
}

export const RippleButton = React.forwardRef<HTMLButtonElement, RippleButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {

    const createRipple = (event: React.MouseEvent<HTMLElement>) => {
      const button = event.currentTarget;
      const circle = document.createElement('span');
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
      circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
      circle.classList.add('ripple');

      const ripple = button.getElementsByClassName('ripple')[0];
      if (ripple) {
        ripple.remove();
      }
      button.appendChild(circle);
    };
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        createRipple(event as React.MouseEvent<HTMLElement>);
        if (props.onClick) {
            props.onClick(event);
        }
    };


    return (
      <Button
        className={cn('ripple-button', className)}
        variant={variant}
        size={size}
        asChild={asChild}
        ref={ref}
        {...props}
        onClick={asChild ? props.onClick : handleClick} // Apply ripple only if not asChild with its own click logic
      >
        {children}
      </Button>
    );
  }
);
RippleButton.displayName = 'RippleButton';
