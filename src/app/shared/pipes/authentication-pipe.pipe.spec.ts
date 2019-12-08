import { AuthenticationPipePipe } from './authentication-pipe.pipe';

describe('AuthenticationPipePipe', () => {
  it('create an instance', () => {
    const pipe = new AuthenticationPipePipe();
    expect(pipe).toBeTruthy();
  });
});
