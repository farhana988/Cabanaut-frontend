interface FormattedDateTimeProps {
  datetime: string | Date;
  showDate?: boolean;
  showTime?: boolean;
  locale?: string;
}

const FormattedDateTime = ({
  datetime,
  showDate = true,
  showTime = true,
  locale = "en-US",
}: FormattedDateTimeProps) => {
  const dateObj = new Date(datetime);

  const formattedTime = showTime
    ? dateObj.toLocaleTimeString(locale, {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  const formattedDate = showDate
    ? dateObj.toLocaleDateString(locale, {
        month: "numeric",
        day: "numeric",
        year: "2-digit",
      })
    : "";

  if (showDate && showTime) {
    return (
      <span>
        {formattedTime} {formattedDate}
      </span>
    );
  }

  return <span>{formattedTime || formattedDate}</span>;
};

export default FormattedDateTime;
