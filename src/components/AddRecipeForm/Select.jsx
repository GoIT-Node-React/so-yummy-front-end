import Select from 'react-select';

export default function StyledSelect({ data }) {
  return (
    <>
      <Select
        options={data}
        isSearchable={false}
        styles={{
          dropdownIndicator: () => ({
            color: '#8BAA36',
            width: '10px',
            height: '5px',
            cursor: 'pointer',
            marginLeft: '12px',
            marginBottom: '12px',
            // zIndex: '-1',
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
            zIndex: '-1',
          }),
          option: () => ({
            fontSize: '12px',
            lineHeight: '1.5',
            color: 'rgba(0, 0, 0, 0.5)',
            marginBottom: '4px',
          }),
          menu: () => ({
            width: '123px',
            height: '144px',
            borderRadius: '6px',
          }),
          menuList: () => ({
            width: '123px',
            height: '144px',
            padding: '8px 14px',
            backgroundColor: '#ffffff',
            boxShadow: '0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074)',
            borderRadius: '6px',
            overflowY: 'scroll',
            cursor: 'pointer',
            marginLeft: '-54px',

            '::-webkit-scrollbar': {
              width: '4px',
              height: '93px',
              backgroundColor: '#E7E5E5',
              borderRadius: '12px',
            },
          }),
        }}
      />
    </>
  );
}
