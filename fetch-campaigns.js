  // Get the JSON data from the <script> tag
  const jsonData = document.getElementById('ng-state').textContent;
  const data = JSON.parse(jsonData);

  // Extract the campaignId
  const campaigns = data['api-cache.state']['USER_CAMPAIGNS'];
  for (const key in campaigns) {
    if (campaigns.hasOwnProperty(key)) {
      const campaignId = key.replace(/["\[\]]/g, '').split(',')[0];
      document.body.classList.add(campaignId);
    }
  }
