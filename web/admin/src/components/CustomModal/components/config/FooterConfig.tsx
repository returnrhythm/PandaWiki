import { AppDetail, HeaderSetting } from '@/api';
import DragBtn from '../basicComponents/DragBtn';
import UploadFile from '@/components/UploadFile';
import { Stack, Box, TextField } from '@mui/material';
import { Icon } from 'ct-mui';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/store';
import { setAppPreviewData } from '@/store/slices/config';
import { DomainBrandGroup } from '@/request/types';

interface FooterConfigProps {
  data?: AppDetail | null;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

const FooterConfig = ({ data, setIsEdit }: FooterConfigProps) => {
  const { appPreviewData } = useAppSelector(state => state.config);
  const dispatch = useAppDispatch();
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<HeaderSetting | any>({
    defaultValues: {
      corp_name: '',
      icp: '',
      brand_name: '',
      brand_desc: '',
      brand_logo: '',
      brand_groups: [] as DomainBrandGroup[],
    },
  });

  const corp_name = watch('corp_name');
  const icp = watch('icp');
  const brand_name = watch('brand_name');
  const brand_desc = watch('brand_desc');
  const brand_logo = watch('brand_logo');
  const brand_groups = watch('brand_groups');

  //   const handleAddButton = () => {
  //     const id = Date.now().toString();
  //     const newBtn = {
  //       id,
  //       url: '',
  //       variant: 'outlined' as const,
  //       showIcon: true,
  //       icon: '',
  //       text: '按钮' + (btns.length + 1),
  //       target: '_self' as const,
  //     };

  //     const currentBtns = appPreviewData?.settings.btns || [];
  //     const newBtns = [...currentBtns, newBtn];
  //     setValue('btns', newBtns);
  //     setIsEdit(true);
  //   };

  useEffect(() => {
    if (data?.settings) {
      setValue('corp_name', data.settings?.footer_settings?.corp_name || '');
      setValue('icp', data.settings?.footer_settings?.icp || '');
      setValue('brand_name', data.settings?.footer_settings?.brand_name || '');
      setValue('brand_desc', data.settings?.footer_settings?.brand_desc || '');
      setValue('brand_logo', data.settings?.footer_settings?.brand_logo || '');
      setValue(
        'brand_groups',
        data.settings?.footer_settings?.brand_groups || [],
      );
    }
  }, [data]);

  useEffect(() => {
    if (!appPreviewData) return;
    const previewData = {
      ...appPreviewData,
      settings: {
        ...appPreviewData.settings,
        footer_settings: {
          ...appPreviewData.settings.footer_settings,
          corp_name,
          icp,
          brand_name,
          brand_desc,
          brand_logo,
          brand_groups,
        },
      },
    };
    dispatch(setAppPreviewData(previewData));
  }, [corp_name, icp, brand_name, brand_desc, brand_logo, brand_groups]);

  return (
    <>
      <Stack gap={3}>
        <Stack direction={'column'} gap={2}>
          <Box
            sx={{
              fontSize: 14,
              lineHeight: '22px',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              fontWeight: 600,
              '&::before': {
                content: '""',
                display: 'inline-block',
                width: 4,
                height: 12,
                bgcolor: '#3248F2',
                borderRadius: '2px',
                mr: 1,
              },
            }}
          >
            网站介绍信息
          </Box>
          <Stack direction={'column'} spacing={3}>
            <Stack direction={'column'} spacing={1}>
              <Box
                sx={{ fontWeight: 400, fontSize: '12px', lineHeight: '20px' }}
              >
                Logo 图标
              </Box>
              <Controller
                control={control}
                name='brand_logo'
                render={({ field }) => (
                  <UploadFile
                    {...field}
                    id='footerconfig_logo'
                    name='footerconfig_logo'
                    type='url'
                    accept='image/*'
                    width={80}
                    onChange={(url: string) => {
                      field.onChange(url);
                      setIsEdit(true);
                    }}
                  />
                )}
              />
            </Stack>
            <Stack direction={'column'} spacing={1}>
              <Box
                sx={{ fontWeight: 400, fontSize: '12px', lineHeight: '20px' }}
              >
                Logo 文字
              </Box>
              <Controller
                control={control}
                name='brand_name'
                render={({ field }) => (
                  <TextField
                    fullWidth
                    {...field}
                    placeholder='请输入'
                    error={!!errors.title}
                    helperText={errors.title?.message?.toString()}
                    onChange={e => {
                      field.onChange(e.target.value);
                      setIsEdit(true);
                    }}
                  />
                )}
              />
            </Stack>
            <Stack direction={'column'} spacing={1}>
              <Box
                sx={{ fontWeight: 400, fontSize: '12px', lineHeight: '20px' }}
              >
                说明信息
              </Box>
              <Controller
                control={control}
                name='brand_desc'
                render={({ field }) => (
                  <TextField
                    fullWidth
                    {...field}
                    placeholder='请输入'
                    error={!!errors.title}
                    helperText={errors.title?.message?.toString()}
                    onChange={e => {
                      field.onChange(e.target.value);
                      setIsEdit(true);
                    }}
                  />
                )}
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack direction={'column'} gap={2}>
          <Box
            sx={{
              fontSize: 14,
              lineHeight: '22px',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              fontWeight: 600,
              '&::before': {
                content: '""',
                display: 'inline-block',
                width: 4,
                height: 12,
                bgcolor: '#3248F2',
                borderRadius: '2px',
                mr: 1,
              },
            }}
          >
            版权信息
          </Box>
          <Controller
            control={control}
            name='corp_name'
            render={({ field }) => (
              <TextField
                fullWidth
                {...field}
                placeholder='请输入'
                error={!!errors.title}
                helperText={errors.title?.message?.toString()}
                onChange={e => {
                  field.onChange(e.target.value);
                  setIsEdit(true);
                }}
              />
            )}
          />
        </Stack>
        <Stack direction={'column'} gap={2}>
          <Box
            sx={{
              fontSize: 14,
              lineHeight: '22px',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              fontWeight: 600,
              '&::before': {
                content: '""',
                display: 'inline-block',
                width: 4,
                height: 12,
                bgcolor: '#3248F2',
                borderRadius: '2px',
                mr: 1,
              },
            }}
          >
            ICP 备案编号
          </Box>
          <Controller
            control={control}
            name='icp'
            render={({ field }) => (
              <TextField
                fullWidth
                {...field}
                placeholder='请输入'
                error={!!errors.placeholder}
                helperText={errors.placeholder?.message?.toString()}
                onChange={e => {
                  field.onChange(e.target.value);
                  setIsEdit(true);
                }}
              />
            )}
          />
        </Stack>
        {/* <Stack direction={'column'} gap={2}>
          <Box
            sx={{
              fontSize: 14,
              lineHeight: '22px',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              '&::before': {
                content: '""',
                display: 'inline-block',
                width: 4,
                height: 12,
                bgcolor: '#3248F2',
                borderRadius: '2px',
                mr: 1,
              },
            }}
          >
            按钮
            <Stack
              direction={'row'}
              sx={{
                alignItems: 'center',
                marginLeft: 'auto',
                cursor: 'pointer',
              }}
              onClick={handleAddButton}
            >
              <Icon
                type='icon-tianjia'
                sx={{ fontSize: '10px !important', color: '#5F58FE' }}
              />
              <Box sx={{ fontSize: 14, lineHeight: '22px', marginLeft: 0.5 }}>
                添加
              </Box>
            </Stack>
          </Box>
          <Box>
            <DragBtn
              data={btns}
              onChange={btns => {
                setValue('btns', btns);
                setIsEdit(true);
              }}
              setIsEdit={setIsEdit}
            />
          </Box>
        </Stack> */}
        {/* <Stack direction={'column'} gap={2}>
          <Controller
            control={control}
            name='allow_theme_switching'
            render={({ field }) => (
              <Box
                sx={{
                  fontSize: 14,
                  lineHeight: '22px',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  '&::before': {
                    content: '""',
                    display: 'inline-block',
                    width: 4,
                    height: 12,
                    bgcolor: '#3248F2',
                    borderRadius: '2px',
                    mr: 1,
                  },
                }}
              >
                是否允许切换主题
                <Switch
                  sx={{ marginLeft: 'auto' }}
                  {...field}
                  checked={field.value}
                  onChange={e => {
                    field.onChange(e.target.checked);
                    setIsEdit(true);
                  }}
                ></Switch>
              </Box>
            )}
          />
        </Stack> */}
      </Stack>
    </>
  );
};

export default FooterConfig;
