export default function lifeBar(options) {
  const health = [
    {
      maxHealth: Infinity,
      minHealth: 51,
      status: 'healthy',
    },
    {
      maxHealth: 50,
      minHealth: 15,
      status: 'wounded',
    },
    {
      maxHealth: 14,
      minHealth: 0,
      status: 'critical',
    },
  ];
  let status = 'error';
  for (let index = 0; index < health.length; index += 1) {
    const element = health[index];
    if (element.maxHealth >= options.health && options.health >= element.minHealth) {
      status = element.status;
      return status;
    }
  }
  return status;
}
