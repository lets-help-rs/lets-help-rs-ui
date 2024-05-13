import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const EditMode = ({onSave}) => {
  const [content, setContent] = useState("");
  const textareaRef = useRef(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = "inherit";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleSave = () => {
    if (content) {
      onSave(content);
    } else {
      toast.error("Adicione uma descricacao ao ponto de coleta");
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [content]);
  const placeholderPopup = `Descrição:
Horário: 
Itens Aceitos: `;

  return (
    <>
      <textarea
        ref={textareaRef}
        value={content}
        autoFocus
        onChange={(e) => {
          setContent(e.target.value);
          adjustTextareaHeight();
        }}
        className="p-2 text-sm border-2 border-gray-300 rounded focus:outline-none focus:border-blue-rs resize-none overflow-hidden min-h-20"
        placeholder={placeholderPopup}
      />
      <button
        onClick={handleSave}
        className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-rs focus:outline-none focus:ring-2 focus:ring-blue-rs focus:ring-opacity-50"
      >
        Salvar
      </button>
    </>
  );
};

export default EditMode;
