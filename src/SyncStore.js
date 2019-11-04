export default function SyncStore(data) {
  console.log(data)
  localStorage.data = JSON.stringify(data)
}