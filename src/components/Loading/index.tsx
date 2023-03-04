import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

interface LoadingProps {
  color?: string;
  size?: number | 'small' | 'large';
}

export function Loading({ color, size = 'large' }: LoadingProps) {
  const theme = useTheme();

  return (
    <ActivityIndicator
      color={color ? color : theme.colors.primary}
      size={size}
      style={{ flex: 1 }}
    />
  );
}
