import { Menu2Module } from './menu2.module';

describe('Menu2Module', () => {
  let menu2Module: Menu2Module;

  beforeEach(() => {
    menu2Module = new Menu2Module();
  });

  it('should create an instance', () => {
    expect(menu2Module).toBeTruthy();
  });
});
