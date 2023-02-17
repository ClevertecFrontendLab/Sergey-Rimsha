import './spinner.scss';

export const Spinner = () => (
  <div data-test-id='loader' className='spinner'>
    <div className='spinner__box'>
      <div className='spinner__item'>
        <div />
      </div>
    </div>
  </div>
);
