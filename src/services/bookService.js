import { supabase } from './supabaseClient';

export const fetchBooks = async (filter = '') => {
  const { data } = await supabase
    .from('books')
    .select('*')
    .ilike('title', `%${filter}%`)
    .order('created_at', { ascending: false });
  return data || [];
};

export const addBook = async ({ title, author, status, note }) => {
  const { data: user } = await supabase.auth.getUser();
  await supabase.from('books').insert([{ title, author, status, note, user_id: user?.user?.id }]);
};

export const deleteBook = async (id) => {
  await supabase.from('books').delete().eq('id', id);
};

export const updateBookStatus = async (id, status) => {
  await supabase.from('books').update({ status }).eq('id', id);
};