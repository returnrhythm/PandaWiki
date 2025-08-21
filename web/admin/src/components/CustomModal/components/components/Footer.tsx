import {
  Box,
  Button,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { useState } from 'react';
import Logo from '@/assets/images/logo.png';
import { Icon } from 'ct-mui';
import { AppSetting } from '@/api';
import NavBtns from '../basicComponents/NavBtns';
import { getButtonThemeStyle } from '../basicComponents/buttonThemeUtils';

interface FooterProps {
  settings: Partial<AppSetting>;
  renderMode: 'pc' | 'mobile';
}
const Footer = ({ settings, renderMode }: FooterProps) => {
  const {
    corp_name = '',
    icp = '',
    brand_name = '',
    brand_desc = '',
    brand_logo = '',
    brand_groups = [],
  } = settings.footer_settings || {};

  return (
    <Stack
      direction={'column'}
      sx={{
        position: 'sticky',
        bottom: 0,
        zIndex: 10,
        paddingLeft: '18.75%',
        paddingTop: '60px',
        height: '494px',
        bgcolor: 'background.footer',
        maxWidth: '100%',
        minWidth: 0,
        // ...(renderMode === 'mobile' && {
        //   left: 0,
        //   pl: 1.5,
        //   pr: 0.5,
        // }),
      }}
    >
      <Stack direction='row' sx={{ height: '362px' }}>
        <Stack direction={'column'} gap={3}>
          <Stack direction={'row'} gap={2} alignItems={'center'}>
            {brand_logo ? (
              <img src={brand_logo} width={24} height={24} />
            ) : null}
            <Box
              sx={{
                fontSize: '24px',
                lineHeight: '32px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              {brand_name}
            </Box>
          </Stack>
          <Box
            sx={{
              width: '260px',
              color: 'rgba(255, 255, 255, 0.70)',
              lineHeight: '24px',
              fontSize: '12px',
            }}
          >
            {brand_desc}
          </Box>
        </Stack>
      </Stack>
      <Stack
        sx={{
          marginX: '18.75%',
          bgcolor: 'rgba(236, 238, 241, 0.10)',
          width: '100%',
          height: '1px',
        }}
      ></Stack>
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'center'}
        sx={{ margin: '0 auto' }}
      >
        <Stack sx={{}}></Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
