export const getParamsCMD = () => {
  let params = {};
  for (let i = 2; i < process.argv.length; i++) {
    if (!process.argv[i]) {
      continue;
    }
    const result = process.argv[i].split(/^--|=/);
    if (result.length < 3) {
      continue;
    }
    params[result[1]] = result[2];
  }
  return Object.assign(process.env, params);
};
