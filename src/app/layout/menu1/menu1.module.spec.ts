import { Menu1Module } from './menu1.module';

describe('Menu1Module', () => {
  let menu1Module: Menu1Module;

  beforeEach(() => {
    menu1Module = new Menu1Module();
  });

  it('should create an instance', () => {
    expect(menu1Module).toBeTruthy();
  });
});
