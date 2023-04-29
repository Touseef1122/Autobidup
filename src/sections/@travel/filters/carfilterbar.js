import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import filterIcon from '@iconify/icons-carbon/filter';
import { Iconify } from '../../../components';

import { Stack, Drawer, Box, Typography ,Button} from '@mui/material';
// config
import { DRAWER_WIDTH, HEADER_DESKTOP_HEIGHT } from '../../../config';
//
import { SearchInput } from '../../../components';
import Carfiltermake from './carfiltermake';
import Carfilterprice from './carfilterprice';
import Carfilteryear from './carfilteryear';
import Carfiltermileage from './carfiltermileage';

// ----------------------------------------------------------------------

const defaultValues = {
  filtermileage: [],
  filteryear: [],
  filterprice: [],
  filtermake: [],
};

Carfilterbar.propTypes = {
  mobileOpen: PropTypes.bool,
  onMobileClose: PropTypes.func,
};

export default function Carfilterbar({ mobileOpen, onMobileClose }) {
  const [filters, setFilters] = useState(defaultValues);

  const handlechangemake = (keyword) => {
    setFilters({
      ...filters,
      filtermake: keyword,
    });
  };

  const handlechangeprice = (keyword) => {
    setFilters({
      ...filters,
      filterprice: keyword,
    });
  };
  const handlechangeyear = (keyword) => {
    setFilters({
      ...filters,
      filteryear: keyword,
    });
  };
  const handlechangemileage = (keyword) => {
    setFilters({
      ...filters,
      filtermileage: keyword,
    });
  };

  const renderFilters = (
    <Stack spacing={2.5}>
      <SearchInput />

      <section>
        <Typography variant="overline" sx={{ mb: 1.5, color: 'text.secondary', display: 'block' }}>
          Make
        </Typography>
        <Carfiltermake filtermake={filters.filtermake} onchangemake={handlechangemake} />
      </section>
      <section>
        <Typography variant="overline" sx={{ mb: 1.5, color: 'text.secondary', display: 'block' }}>
          Price
        </Typography>
        <Carfilterprice filterprice={filters.filterprice} onchangeprice={handlechangeprice} />
      </section>
      <section>
        <Typography variant="overline" sx={{ mb: 1.5, color: 'text.secondary', display: 'block' }}>
          Year
        </Typography>
        <Carfilteryear filteryear={filters.filteryear} onchangeyear={handlechangeyear} />
      </section>
      <section>
        <Typography variant="overline" sx={{ mb: 1.5, color: 'text.secondary', display: 'block' }}>
          Mileage
        </Typography>
        <Carfiltermileage
          filtermileage={filters.filtermileage}
          onchangemileage={handlechangemileage}
        />
      </section>
      <Button
        color="inherit"
        variant="contained"
        // startIcon={<Iconify icon={filterIcon} sx={{ width: 18, height: 18 }} />}
        // // onClick={handleMobileOpen}
        // sx={{
        //   display: { md: 'none' },
        // }}
      >
        Filters
      </Button>
    </Stack>
  );

  return (
    <>
      {/* -- Desktop -- */}
      <Box
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          display: {
            xs: 'none',
            md: 'block',
          },
          top: { md: HEADER_DESKTOP_HEIGHT },
          position: { md: 'sticky' },
        }}
      >
        {renderFilters}
      </Box>

      {/* -- Mobile -- */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            pt: 5,
            px: 3,
            pb:5,
            width: DRAWER_WIDTH,
          },
        }}
      >
        {renderFilters}
      </Drawer>
    </>
  );
}
