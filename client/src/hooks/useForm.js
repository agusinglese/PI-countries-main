import { useState } from "react";
import { useDispatch } from "react-redux";
import { postActivity } from "../actions";

export const useForm = (initialForm, validateForm) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm({ ...form, [e.target.name]: e.target.value }));
  };

  const handleChangeList = (e) => {
    let searchCountry = form.countries.find(
      (element) => element === e.target.value
    );
    if (!searchCountry && e.target.value !== "") {
      setForm({
        ...form,
        [e.target.name]: [...form.countries, e.target.value],
      });
      setErrors(
        validateForm({
          ...form,
          [e.target.name]: [...form.countries, e.target.value],
        })
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    dispatch(postActivity(form));
    handleReset();
  };

  const handleReset = () => {
    setForm({
      name: "",
      duration: "",
      difficulty: "",
      season: "",
      countries: [],
    });
  };

  const handleDelete = (country) => {
    setForm({
      ...form,
      countries: form.countries.filter((c) => c !== country),
    });
  };

  return {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleDelete,
    handleChangeList,
  };
};
