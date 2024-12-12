export const menus = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Orders',
    to: '/orders',
    children: [
      {
        label: 'Details',
        to: 'details',
        children: [
          {
            label: 'Order Status',
            to: 'order-status',
            children: [
              {
                label: 'Date',
                to: 'date',
              },
              {
                label: 'Shipping Address',
                to: 'shipping-address',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Settings',
    to: '/settings',
    children: [
      {
        label: 'Account',
        to: 'account',
      },
      {
        label: 'Authentication',
        to: 'authentication',
        children: [
          {
            label: 'ID',
            to: 'id',
          },
          {
            label: 'Register',
            to: 'register',
            children: [
              {
                label: 'Google',
                to: 'google',
              },
              {
                label: 'Username/Passowrd',
                to: 'username-password',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Logout',
    to: '/',
  },
];

export default menus;
