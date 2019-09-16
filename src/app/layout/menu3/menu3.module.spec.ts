import { Menu3Module } from './menu3.module';

describe('Menu3Module', () => {
  let menu3Module: Menu3Module;

  beforeEach(() => {
    menu3Module = new Menu3Module();
  });

  it('should create an instance', () => {
    expect(menu3Module).toBeTruthy();
  });
});
