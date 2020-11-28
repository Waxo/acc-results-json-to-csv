const R = requireNode('ramda');

const carsModel = {
  0: 'Porsche 991 GT3-R',
  1: 'Mercedes AMG GT3',
  2: 'Ferrari 488 GT3',
  3: 'Audi R8 LMS',
  4: 'Lamborghini Huracan GT3',
  5: 'McLaren 650S GT3',
  6: 'Nissan GT R Nismo GT3',
  7: 'BMW M6 GT3',
  8: 'Bentley Continental GT3',
  9: 'Porsche 991 II GT3 Cup',
  10: 'Nissan GT-R Nismo GT3',
  11: 'Bentley Continental GT3',
  12: 'AMR V12 Vantage GT3',
  13: 'Reiter Engineering R-EX GT3',
  14: 'Emil Frey Jaguar G3',
  15: 'Lexus RC F GT3',
  16: 'Lamborghini Huracan GT3 EVO',
  17: 'Honda NSX GT3',
  18: 'Lamborghini Huracan SuperTrofeo',
  19: 'Audi R8 LMS EVO',
  20: 'AMR V8 Vantage GT3',
  21: 'Honda NSX GT3 EVO',
  22: 'McLaren 720s GT3',
  23: 'Porsche 991 II GT3 R',
  24: 'Ferrari 488 GT3 Evo',
  25: 'Mercedes AMG GT3 (2020)',
  50: 'Alpine A110 GT4',
  51: 'Aston Martin Vantage GT4',
  52: 'Audi R8 LMS GT4',
  53: 'BMW M4 GT4',
  55: 'Chevrolet Camaro GT4',
  56: 'Ginetta G55 GT4',
  57: 'KTM X-Bow GT4',
  58: 'Maserati MC GT4',
  59: 'McLaren 570S GT4',
  60: 'Mercedes AMG GT4',
  61: 'Porsche 718 Cayman GT4'
};

const carModelToName = R.flip(R.prop)(carsModel);

export default carModelToName;
