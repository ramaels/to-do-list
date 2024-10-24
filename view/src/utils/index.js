export const createTodo = async (todo) => {
  try {
    const res = await fetch('/api/todo/create', {
      method: 'POST',
      body: data,
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return { err };
  }
};

export const getTodos = async () => {
  try {
    const res = await fetch('/api/todos');
    const data = await res.json();
    return data;
  } catch (err) {
    return { err };
  }
};

export const removeTodo = async (id) => {
  try {
    await fetch(`/api/todos/${id}`, {
      method: 'DELETE'
    });
  } catch (err) {
    return { err };
  }
};