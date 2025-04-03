
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = { amount: 10000, years: 10, rate: 5 };
  expect(calculateMonthlyPayment(values)).toEqual("106.07");
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = { amount: 12343, years: 10, rate: 5 };
  expect(calculateMonthlyPayment(values)).toEqual("130.92");
});

it("should handle zero interest rate", function() {
  const values = { amount: 10000, years: 10, rate: 0 };
  expect(calculateMonthlyPayment(values)).toEqual("83.33");
}
);

it("should handle very high interest rates", function() {
  const values = { amount: 10000, years: 10, rate: 100 };
  expect(calculateMonthlyPayment(values)).toEqual("833.39");
}
);

it("should handle very small loan amounts", function() {
  const values = { amount: 1, years: 10, rate: 5 };
  expect(calculateMonthlyPayment(values)).toEqual("0.01");
}
);

it("should handle very large loan amounts", function() {
  const values = { amount: 1000000, years: 30, rate: 5 };
  expect(calculateMonthlyPayment(values)).toEqual("5368.22");
}
);

/// etc
