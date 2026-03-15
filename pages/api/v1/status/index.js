function status(request, response) {
  response.status(200).json({
    chave: "mamão papaia",
  });
}

export default status;
