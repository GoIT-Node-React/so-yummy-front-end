import Select from 'react-select';

export default function StyledSelect({ data, value, setValue }) {
  return (
    <>
      <Select
        value={{ value: value, label: value }}
        options={data}
        isSearchable={false}
        onChange={selectedOption => setValue(selectedOption.value)}
        styles={{
          dropdownIndicator: () => ({
            color: '#8BAA36',
            width: '10px',
            height: '5px',
            cursor: 'pointer',
            marginLeft: '12px',
            marginBottom: '12px',
          }),
          indicatorSeparator: () => ({
            display: 'none',
          }),
          control: () => ({
            display: 'flex',
            justifyContent: 'flex-end',
            marginLeft: 'auto',
            border: 'none',
            fontSize: '12px',
            lineHeight: '1',
            marginBottom: '6px',
          }),
          valueContainer: () => ({
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }),
          option: () => ({
            fontSize: '12px',
            lineHeight: '1.5',
            color: 'rgba(0, 0, 0, 0.5)',
            marginBottom: '4px',
          }),
          menu: baseStyles => ({
            ...baseStyles,
            width: '123px',
            height: '144px',
            borderRadius: '6px',

            boxShadow: '0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074)',
          }),
          menuList: baseStyles => ({
            ...baseStyles,

            width: '123px',
            height: '144px',
            padding: '8px 14px',
            borderColor: 'transparent',
            backgroundColor: '#ffffff',
            borderRadius: '6px',
            marginLeft: '3px',
            overflowY: 'scroll',
            cursor: 'pointer',
            '::-webkit-scrollbar-thumb': {
              backgroundColor: '#E7E5E5',
              height: '93px',
              width: '4px',
              borderRadius: '12px',
            },
            '::-webkit-scrollbar-track': {
              background: '#FFFFFF',

              borderRadius: '12px',
              width: '4px',
            },
            '::-webkit-scrollbar': {
              borderRadius: '12px',
              width: '4px',
            },
          }),
        }}
      />
    </>
  );
}
