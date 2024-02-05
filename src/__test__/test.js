import lifeBar from '../js/app';

test.each(
  [
    {
      name: 'Maxim',
      health: 65,
      status: 'healthy',
    },
    {
      name: 'Anna',
      health: 49,
      status: 'wounded',
    },
    {
      name: 'Pasha',
      health: 3,
      status: 'critical',
    },
    {
      name: 'Sasha',
      health: 16,
      status: 'wounded',
    },
    {
      name: 'Sveta',
      health: 14,
      status: 'critical',
    },
    {
      name: 'Vika',
      health: 37,
      status: 'wounded',
    },
    {
      name: 'Error',
      health: -37,
      status: 'error',
    },
  ],
)('test for lifeBar function for the player $name with lives $health', ({ name, health, status }) => {
  const result = lifeBar({ name, health, status });
  expect(result).toBe(status);
});
