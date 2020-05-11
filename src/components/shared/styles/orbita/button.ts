export const button = {
  primary: {
    color: '#FFFFFF !important',
    background: '#0D47A1 !important',
    border: '2px solid #0D47A1 !important',
    borderRadius: '4px !important',
    fontWeight: '600 !important',
    fontSize: '14px !important',
    lineHeight: '150% !important',
    padding: '0px 16px  0px 16px!important',
    '&:hover': {
      background: '#265AAB !important',
    },
    '&:focus': {
      border: '2px solid #B0BEC5 !important',
    },
    '&:disabled': {
      color: 'rgba(0, 0, 0, 0.25) !important',
      backgroundColor: '#f5f5f5 !important',
      borderColor: '#d9d9d9 !important',
    }
  },
  default: {
    color: '#0D47A1 !important',
    background: '#FFFFFF !important',
    border: '1.5px solid #0D47A1 !important',
    borderRadius: '4px !important',
    fontWeight: '600 !important',
    fontSize: '14px !important',
    lineHeight: '150% !important',
    padding: '0px 16px  0px 16px!important',
    '&:hover': {
      background: '#FFFFFF !important',
    },
    '&:focus': {
      border: '2px solid #B0BEC5',
      boxsizing: 'border-box',
    },
    '&:disabled': {
      color: 'rgba(0, 0, 0, 0.25) !important',
      backgroundColor: '#f5f5f5 !important',
    }
  },
  shape: {
    circle: {
      minWidth: '32px !important',
      paddingRight: '0 !important',
      paddingLeft: '0 !important',
      textAlign: 'center !important',
      borderRadius: '50% !important',
    }
  }
}
