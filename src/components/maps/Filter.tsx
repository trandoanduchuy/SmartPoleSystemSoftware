import { Select, Option, Breadcrumbs } from '@material-tailwind/react';

const SelectRoad = () => {
  return (
    <div className='w-72'>
      <Select
        label='Select Road'
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 }
        }}
      >
        <Option>Đường 1</Option>
        <Option>Đường 2</Option>
        <Option>Đường 3</Option>
        <Option>Đường 4</Option>
        <Option>Đường 5</Option>
        <Option>Đường 6</Option>
        <Option>Đường 7</Option>
      </Select>
    </div>
  );
};

const SelectArea = () => {
  return (
    <div className='w-72'>
      <Select
        label='Select Area'
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 }
        }}
      >
        <Option>HCMUT CS1</Option>
        <Option>HCMUT CS2</Option>
      </Select>
    </div>
  );
};

const BreadcrumbsWithIcon = () => {
  return (
    <Breadcrumbs className='order-first'>
      <a href='#' className='opacity-60 flex flex-row gap-x-0.5'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          fill='currentColor'
          className='w-4 h-4'
        >
          <path
            fillRule='evenodd'
            d='m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'
            clipRule='evenodd'
          />
        </svg>

        <span>View Map</span>
      </a>
      <a href='#' className='opacity-60'>
        <span>HCMUT CS1</span>
      </a>
      <a href='#'>Đường 1</a>
    </Breadcrumbs>
  );
};

export const Filter = () => {
  return (
    <div className='flex justify-between'>
      <div>
        <BreadcrumbsWithIcon />
      </div>
      <div className='flex flex-row-reverse gap-x-4'>
        <SelectRoad />
        <SelectArea />
      </div>
    </div>
  );
};