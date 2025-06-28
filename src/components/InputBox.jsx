

const InputBox = ({ label, register, required }) => (
  <>
    <label>{label.split("_").join(" ")}</label>
    <input {...register(label, { required })} />
  </>
)

export default InputBox