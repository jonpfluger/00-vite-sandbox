const Form = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="mb-3">
        <label
          htmlFor="exampleInputEmail1"
          className="form-label"
        >
          Username
        </label>
        <input
          name="username"
          value={props.username}
          onChange={props.handleInputChange}
          type="text"
          className="form-control"
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