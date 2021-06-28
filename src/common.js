export function formatRemainedTime(full, played) {
  const remainedTime = full - played;
  const hour = Math.floor(remainedTime/3600);
  const min = Math.floor((remainedTime - (hour*3600))/60);
  const sec = remainedTime - (hour*3600) - (min*60);

  function addZero(num) {
    return `${num < 10 ? '0' : ''}${num}`;
  }

  if(hour > 0) return `${hour}:${addZero(min)}:${addZero(sec)}`;
  else return `${min}:${addZero(sec)}`;
}

export function formatUploadedPeriod(uploadedDate) {
  const secs = Math.floor((new Date() - new Date(uploadedDate)) / 1000);
  if (secs < 60) return '방금 전';

  const mins = Math.floor(secs / 60);
  if (mins < 60) return `${mins}분 전`;

  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}시간 전`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}일 전`;

  const weeks = Math.floor(days / 7);
  if(weeks < 5) return `${weeks}주 전`;

  const months = Math.floor(days / 30);
  if(months < 12) return `${months}개월 전`;

  const years = Math.floor(days / 365);
  return `${years}년 전`;
}

export function formatNumber(num) {
  if (num < 1000) return `${num}`;

  const cheon = (num / 1000).toFixed(1);
  if (cheon < 100) {
    if(cheon % 1 == 0) return `${Math.floor(cheon)}천`;
    else return `${cheon}천`;
  }

  const man = (num / 10000).toFixed(1);
  if (man < 10000) {
    if(man % 1 == 0) return `${Math.floor(man)}만`;
    else return `${man}만`;
  }

  const eok = (man / 10000).toFixed(1);
  if (eok < 10000) {
    if(eok % 1 == 0) return `${Math.floor(eok)}억`;
    else return `${eok}억`;
  }
}