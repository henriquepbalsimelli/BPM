

const controllers = {
    async updateUser(req, res) {
        const { body } = req;
        const { email, password, name } = body;

        res.status(200).json({ 
            message: 'FOI'
        })
    }
  };


const controllerBy = {
    PUT: controllers.updateUser,
    OPTIONS: (_, res) => res.send('OK'),
  }

export default function handler(req, res) {
    if (controllerBy[req.method]) return controllerBy[req.method](req, res);
  
    res.status(404).json({
      status: 404,
      message: 'Not Found'
    });
  }