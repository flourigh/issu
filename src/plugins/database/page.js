module.exports = {
  Version: () => { return process.env.npm_package_version },
  Title: () => { return process.env.npm_package_displayName },
  Prefix: () => { return process.env.npm_package_displayName },
  Name: () => { return process.env.npm_package_name },
  Description: () => { return process.env.npm_package_description },
  Subject: () => { return process.env.npm_package_description },
  Terms: () => { return process.env.npm_package_config_terms },
  Color: () => { return process.env.npm_package_config_color },
  Canonical: () => { return process.env.npm_package_homepage },
  BaseURL: () => { return process.env.BASE_URL || '/' }
}
