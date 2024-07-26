<script>
  document.addEventListener('DOMContentLoaded', () => {
    try {
      // Use querySelector to get the <script> element by its ID
      const scriptElement = document.querySelector("#ng-state");
      if (!scriptElement) {
        console.error('Script element with id "ng-state" not found');
        return;
      }
      
      // Get the JSON data from the <script> tag
      const jsonData = scriptElement.textContent.trim();
      console.log('Raw JSON data:', jsonData);

      // Ensure JSON data is not empty
      if (!jsonData) {
        console.error('JSON data is empty');
        return;
      }

      // Parse the JSON data
      const data = JSON.parse(jsonData);
      console.log('Parsed JSON data:', data);

      // Extract the campaignId
      const userCampaigns = data['api-cache.state']['USER_CAMPAIGNS'];
      console.log('User campaigns:', userCampaigns);

      if (!userCampaigns) {
        console.error('USER_CAMPAIGNS is not found in the JSON data');
        return;
      }

      for (const key in userCampaigns) {
        if (userCampaigns.hasOwnProperty(key)) {
          console.log('Campaign key:', key);
          const campaignId = key.replace(/["\[\]]/g, '').split(',')[0];
          console.log('Extracted campaignId:', campaignId);
          document.body.classList.add(campaignId);
          console.log('Added class to body:', campaignId);
        }
      }
    } catch (error) {
      console.error('Error processing JSON data:', error);
    }
  });
</script>
