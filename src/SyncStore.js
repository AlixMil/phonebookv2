export default function SyncStore(data) {
  localStorage.data = JSON.stringify(data)
}