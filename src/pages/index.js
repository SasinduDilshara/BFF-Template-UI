import { useRef, useCallback, useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OrdersTable } from 'src/sections/order/orders-table';
import { OrdersSearch } from 'src/sections/order/orders-search';
import { applyPagination } from 'src/utils/apply-pagination';
import OrderSelect from 'src/sections/order/orders-dropdown';
import { getCustomerOrderUrl, getOrderUrl } from 'src/constants/Constants';
import { getAPI } from 'src/api/ApiHandler';

const useorders = (data, page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [customer, setCustomer] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const orders = useorders(data, page, rowsPerPage);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getAPI(customer != '' && status != '' ? getCustomerOrderUrl + "?customer=" + customer + "&status=" + status: getOrderUrl);
      setLoading(false);
      if (response.status !== 200) {
        setError(response.message);
      } else {
        setError(null);
        setData(response.data)
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
};

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );
  const onSearchChange = (e) => {
    setCustomer(e.target.value);
  }

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  }

  return (
    loading ? <div>Loading...</div> : error != null ? <div>{error}</div> :
    <>
      <Head>
        <title>
          orders | MegaPort Kit
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Orders
                </Typography>
              </Stack>
              <div>
                <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                  href='/create-order'
                >
                  Add
                </Button>
              </div>
            </Stack>
            <Stack direction={"row"}>
            <OrdersSearch 
              onChange={onSearchChange} 
            />
            <OrderSelect
              handleChange={onStatusChange}
            />
            </Stack>
            <OrdersTable
              count={data.length}
              items={orders}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              page={page}
              rowsPerPage={rowsPerPage}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
