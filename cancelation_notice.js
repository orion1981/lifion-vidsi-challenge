// this function takes in a list of invoices and subscribers and then returns a list of subscribers who need a cancelation notice

function sendCancelationNotice(invoices, subscribers){
  var pastDue = subscribers.filter(function(member){
    return member.invoices.pastDue > 0
  })
}
