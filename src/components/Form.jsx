const Form = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="mb-3">
        <label
          htmlFor="exampleInputEmail1"
          className="form-label"
        >
          Email address
        </label>
        <input
          name="email"
          value={props.formState.email}
          onChange={props.handleInputChange}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp" 
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="exampleInputPassword1"
          className="form-label"
        >
          Password
        </label>
        <input
          name="password"
          value={props.formState.password}
          onChange={props.handleInputChange}
          type="password"
          className="form-control"
          id="exampleInputPassword1" 
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  )
}

export default Form