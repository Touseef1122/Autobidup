import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
// import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import PrintIcon from '@mui/icons-material/Print';
// import ShareIcon from '@mui/icons-material/Share';
import { Icon } from '@iconify/react';                     
const actions = [
  { icon: <Icon icon="ic:twotone-access-time-filled" />, name: 'Copy' },
  { icon: <Icon icon="ic:twotone-access-time-filled" />, name: 'Save' },
  { icon: <Icon icon="ic:twotone-access-time-filled" />, name: 'Print' },
  { icon: <Icon icon="ic:twotone-access-time-filled" />, name: 'Share' },
];

export default function ControlledOpenSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{height: 0,
        transform: 'translateZ(0px)',
        flexGrow: 1,
        position: 'fixed',
        zIndex: '2147483003',
        padding: '0 !important',
        margin: '0 !important',
        border: 'none',
        bottom: '10px',
        right: '20px',
        maxWidth: '48px',
        width: '48px',
        maxHeight: '48px',
        height: '48px',
        borderRadius: '50%',
        cursor: 'pointer',}}>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<Icon icon="tabler:message-chatbot" />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}