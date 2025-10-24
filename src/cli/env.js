const parseEnv = () => {
    const envVars = Object.keys(process.env).filter(key => key.startsWith('RSS_'));
    const output = envVars.map(key => `${key}=${process.env[key]}`).join('; ');
    console.log(output);
};

parseEnv();
