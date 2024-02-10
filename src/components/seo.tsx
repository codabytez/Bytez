import { useEffect, FC } from "react";

export const DocumentTitle: FC<DocumentTitleProps> = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

export const DocumentDescription: FC<DocumentDescriptionProps> = ({
  description,
}) => {
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", description);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }
  }, [description]);

  return null;
};
