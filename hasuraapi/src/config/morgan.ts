export default {
  format: '"IP :remote-addr" - ":method :url" "STATUS :status" ":referrer" :response-time ms',
  options: { skip: () => process.env.NODE_ENV === 'test' },
};
