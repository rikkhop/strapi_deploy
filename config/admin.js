module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eF77kabLIHMWHe7I8jf5+w=='),
  },
});
