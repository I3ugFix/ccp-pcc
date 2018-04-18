//import React from 'react';
import styled from 'styled-components';
import styledMap from 'styled-map';
import { darken,  setLightness } from 'polished';

import theme from '../../themes/main-theme';


const hoverDarkColor = color => darken(0.15, color);

const STButton = styled.button`
	border: 1px solid ${styledMap({
		primary:         'transparent',
		secondary:       setLightness(0.85, (theme.colors.textColor)),
		outline:         (theme.colors.primary),
		ghost:           'transparent',
		ghost_secondary: 'transparent',
		default:         (theme.colors.primary),
	})};
	border-radius:3px;
	text-align: center;
	white-space: nowrap;
	vertical-align: middle;
	user-select: none;
	transition: all .2s ease-in-out;
	margin:5px 8px 5px 0;
	position: relative;

	padding: ${styledMap({
		lg:           '14px 20px',
		lg_preloader: '14px 20px 14px 43px',
		sm:           '4px 8px',
		sm_preloader: '4px 8px 4px 40px',
		preloader: 		'11px 16px 11px 40px',
		default:      '11px 16px',
	})};

	cursor :${styledMap({
		disabled: 'not-allowed',
		default: 'pointer',
	})};

  background: ${styledMap({
		primary:         (theme.colors.primary),
		secondary:       (theme.colors.cardBg),
		outline:         (theme.colors.cardBg),
		ghost:           'none',
		ghost_secondary: 'none',
		default:         (theme.colors.primary),
	})};

  font-size: ${styledMap({
		lg:      '16px',
		sm:      '13px',
		default: '14px',
	})};

	color: ${styledMap({
		secondary:       (theme.colors.textColor),
		outline:         (theme.colors.primary),
		ghost:           (theme.colors.primary),
		ghost_secondary: (theme.colors.textColor),
		default:         (theme.colors.cardBg),
	})};

	opacity:${styledMap({
		disabled: '0.5',
		default: 1,
	})};

	&:focus{
		background: ${styledMap({
			primary:         (theme.colors.primary),
			secondary:       'initial',
			outline:         (theme.colors.cardBg),
			ghost:           (theme.colors.cardBg),
			ghost_secondary: (theme.colors.cardBg),
			default:         (theme.colors.primary),
		})};
		color:${styledMap({
			primary:         (theme.colors.cardBg),
			secondary:       (theme.colors.textColor),
			outline:         (theme.colors.primary),
			ghost:           (theme.colors.primary),
			ghost_secondary: (theme.colors.textColor),
			default:         (theme.colors.cardBg),
		})};
		box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
		outline: none;
	}

  &:hover {
		outline: none;
		transition: all .2s ease-in-out;
		background: ${styledMap({
			primary:         hoverDarkColor(theme.colors.primary),
			secondary:       setLightness(0.85, (theme.colors.textColor)),
			outline:         (theme.colors.primary),
			ghost:           (theme.colors.primary),
			ghost_secondary: setLightness(0.85, (theme.colors.textColor)),
			default:         hoverDarkColor(theme.colors.primary),
		})};
		color:${styledMap({
			outline:         (theme.colors.cardBg),
			secondary:       (theme.colors.textColor),
			ghost_secondary: (theme.colors.gray),
			default:         (theme.colors.cardBg),
		})};
	}

	&:active {
		background:${styledMap({
			primary:         hoverDarkColor(theme.colors.primary),
			secondary:       setLightness(0.85, (theme.colors.textColor)),
			outline:         (theme.colors.primary),
			ghost:           hoverDarkColor(theme.colors.primary),
			ghost_secondary: setLightness(0.85, (theme.colors.textColor)),
			default:         hoverDarkColor(theme.colors.primary),
		})};
		color:${styledMap({
			primary:         (theme.colors.cardBg),
			secondary:       (theme.colors.textColor),
			outline:         (theme.colors.cardBg),
			ghost:           (theme.colors.cardBg),
			ghost_secondary: (theme.colors.textColor),
			default:         (theme.colors.cardBg),
		})};
		box-shadow: none;
	}

`;

export default STButton;
