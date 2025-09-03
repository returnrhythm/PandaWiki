import { Box, Stack } from '@mui/material';
import Logo from '@/assets/images/logo-dark.png';
import { AppSetting } from '@/api';

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
        paddingX: '18.75%',
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
        <Stack direction={'row'} justifyContent={'space-around'} width={'100%'}>
          {brand_groups.length > 0 &&
            brand_groups.map((group, index) => {
              return (
                <Stack direction={'column'} key={index}>
                  <Box
                    sx={{
                      fontWeight: 600,
                      fontSize: '14px',
                      color: '#ffffff',
                      lineHeight: '22px',
                      marginBottom: '24px',
                    }}
                  >
                    {group.name}
                  </Box>
                  <Stack gap={2}>
                    {group.links.map((link, index) => {
                      return (
                        <Box
                          key={index}
                          gap={2}
                          sx={{
                            fontWeight: 300,
                            fontSize: '12px',
                            lineHeight: '20px',
                            color: 'rgba(255,255,255,0.5)',
                          }}
                        >
                          {link.name}
                        </Box>
                      );
                    })}
                  </Stack>
                </Stack>
              );
            })}
        </Stack>
      </Stack>

      <Stack
        sx={{
          bgcolor: 'rgba(236, 238, 241, 0.10)',
          width: '100%',
          height: '1px',
        }}
      ></Stack>
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'center'}
        sx={{ marginX: 'auto', marginTop: '23px' }}
      >
        {corp_name && (
          <Stack
            sx={{
              fontSize: '12px',
              lineHeight: '24px',
              color: 'rgba(255, 255, 255, 0.30)',
            }}
          >
            © 2025 {corp_name} 版权所有
          </Stack>
        )}
        <Stack
          sx={{
            height: '10px',
            width: '1px',
            bgcolor: 'rgba(255, 255, 255, 0.10)',
            mx: '12px',
          }}
        ></Stack>
        {icp && (
          <Stack
            sx={{
              fontSize: '12px',
              lineHeight: '24px',
              color: 'rgba(255, 255, 255, 0.30)',
            }}
          >
            {icp}
          </Stack>
        )}
        <Stack
          sx={{
            height: '10px',
            width: '1px',
            bgcolor: 'rgba(255, 255, 255, 0.10)',
            mx: '12px',
          }}
        ></Stack>
        <Stack
          direction={'row'}
          alignItems={'center'}
          sx={{
            fontSize: '12px',
            lineHeight: '24px',
            color: '#FFFFFF',
          }}
          // onClick={() => {
          //   window.open('https://pandawiki.docs.baizhi.cloud/');
          // }}
          gap={0.5}
        >
          <img src={Logo} alt='PandaWiki' width={16} height={16} />
          本网站由 PandaWiki 提供技术支持
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
