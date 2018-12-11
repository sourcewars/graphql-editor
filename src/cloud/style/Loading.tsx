import { style, keyframes } from 'typestyle';
import * as vars from '../../style/vars';
const fadeIn = keyframes({
  '0%': {
    opacity: 0.0
  },
  '100%': {
    opacity: 1.0
  }
});

const loading = keyframes({
  '0%': {
    opacity: 0.0
  },
  '10%': {
    opacity: 1.0
  },
  '90%': {
    opacity: 1.0
  },
  '100%': {
    opacity: 0.0
  }
});

export const Text = style({
  animationName: loading,
  animationDuration: '3s',
  animationIterationCount: 'infinite',
  color: vars.overlayText,
  padding:10
});
export const Err = style({
  padding:10,
  color:'red'
});
export const Main = style({
  top: 0,
  left: 0,
  position: 'fixed',
  zIndex: 5,
  background: '#000000cc',
  animationName: fadeIn,
  animationDuration: '1s',
  animationIterationCount: 1,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection:'column'
});
