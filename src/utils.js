export const STATUS_TYPES = Object.freeze({
  ERROR: Symbol(),
  WARNING: Symbol(),
  INFO: Symbol(),
});

export const STATUS_RES_GET = (product, res) => {
  if (product[1] === STATUS_TYPES.ERROR) {
    res
      .status(400)
      .send({ status: "ERROR", msg: "Syntax Error", data: product[0] });
  } else if (product[1] === STATUS_TYPES.INFO) {
    res
      .status(200)
      .send({ status: "SUCCESS", msg: "Fetch products", data: product[0] });
  } else if (product[1] === STATUS_TYPES.WARNING) {
    res.status(200).send({
      status: "SUCCESS",
      msg: "Not finished correctly",
      data: product[0],
    });
  }
};
