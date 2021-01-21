let calculator = {
  operand_1:0,
  operand_2:0,
  read(x,y) 
  {
    this.operand_1=x;
    this.operand_2=y;
  },
  sum() 
  {
    return this.operand_1+this.operand_2;
  },
  mul() 
  {
    return this.operand_1*this.operand_2;
  } 
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
