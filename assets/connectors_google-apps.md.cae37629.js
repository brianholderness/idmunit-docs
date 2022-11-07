import{_ as t,c as e,o as a,a as s}from"./app.f33a4d5b.js";const m=JSON.parse('{"title":"Google Apps Connector","description":"","frontmatter":{},"headers":[{"level":2,"title":"Operations","slug":"operations","link":"#operations","children":[{"level":3,"title":"AddGroupMember","slug":"addgroupmember","link":"#addgroupmember","children":[]},{"level":3,"title":"CreateObject","slug":"createobject","link":"#createobject","children":[]},{"level":3,"title":"DeleteObject","slug":"deleteobject","link":"#deleteobject","children":[]},{"level":3,"title":"ModifyObject","slug":"modifyobject","link":"#modifyobject","children":[]},{"level":3,"title":"ClearAttr (User)","slug":"clearattr-user","link":"#clearattr-user","children":[]},{"level":3,"title":"RemoveGroupMember","slug":"removegroupmember","link":"#removegroupmember","children":[]},{"level":3,"title":"RenameObject","slug":"renameobject","link":"#renameobject","children":[]},{"level":3,"title":"ValidateObject","slug":"validateobject","link":"#validateobject","children":[]},{"level":3,"title":"ValidatePassword","slug":"validatepassword","link":"#validatepassword","children":[]}]},{"level":2,"title":"Google Object Attributes","slug":"google-object-attributes","link":"#google-object-attributes","children":[{"level":3,"title":"User","slug":"user","link":"#user","children":[]},{"level":3,"title":"Group","slug":"group","link":"#group","children":[]},{"level":3,"title":"Alias","slug":"alias","link":"#alias","children":[]},{"level":3,"title":"SendAs","slug":"sendas","link":"#sendas","children":[]}]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]}],"relativePath":"connectors/google-apps.md"}'),r={name:"connectors/google-apps.md"},o=s(`<h1 id="google-apps-connector" tabindex="-1">Google Apps Connector <a class="header-anchor" href="#google-apps-connector" aria-hidden="true">#</a></h1><p>The Google Apps Connector is used to validate and manage User, Group, Alias, and SendAs objects in Google Apps.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Group operations do <strong>not</strong> work, and are in the process of being developed to work with the new Google API.</p></div><h2 id="operations" tabindex="-1">Operations <a class="header-anchor" href="#operations" aria-hidden="true">#</a></h2><p>Refer to the Schema section for objectClass and objectClass specific field information.</p><h3 id="addgroupmember" tabindex="-1">AddGroupMember <a class="header-anchor" href="#addgroupmember" aria-hidden="true">#</a></h3><p>Add a user to a group.</p><h4 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-hidden="true">#</a></h4><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>groupId</td><td>Group ID.</td></tr><tr><td>username</td><td>User&#39;s username.</td></tr></tbody></table><h3 id="createobject" tabindex="-1">CreateObject <a class="header-anchor" href="#createobject" aria-hidden="true">#</a></h3><p>Create an object (User, Group, Alias, SendAs).</p><h4 id="params-1" tabindex="-1">Params <a class="header-anchor" href="#params-1" aria-hidden="true">#</a></h4><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>objectClass</td><td>A supported objectClass.</td></tr><tr><td>[fields]</td><td>objectClass specific fields (see below for required fields in bold).</td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Original documentation said that <code>groupEmail</code> was required for groups but was not listed in the Group attributes list.</p></div><h3 id="deleteobject" tabindex="-1">DeleteObject <a class="header-anchor" href="#deleteobject" aria-hidden="true">#</a></h3><p>Delete the specified object (User, Group, Alias, SendAs).</p><h4 id="params-2" tabindex="-1">Params <a class="header-anchor" href="#params-2" aria-hidden="true">#</a></h4><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>objectClass</td><td>A supported objectClass.</td></tr><tr><td>[objectId]</td><td>A field named for the objectClass appropriate naming attribute.</td></tr></tbody></table><h3 id="modifyobject" tabindex="-1">ModifyObject <a class="header-anchor" href="#modifyobject" aria-hidden="true">#</a></h3><p>Modify the specified object (User, Group, SendAs)</p><h4 id="params-3" tabindex="-1">Params <a class="header-anchor" href="#params-3" aria-hidden="true">#</a></h4><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>objectClass</td><td>A supported objectClass.</td></tr><tr><td>[objectId]</td><td>A field named for the objectClass approriate naming attribute.</td></tr><tr><td>[fields]</td><td>objectClass specific fields.</td></tr></tbody></table><h3 id="clearattr-user" tabindex="-1">ClearAttr (User) <a class="header-anchor" href="#clearattr-user" aria-hidden="true">#</a></h3><h4 id="params-4" tabindex="-1">Params <a class="header-anchor" href="#params-4" aria-hidden="true">#</a></h4><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>objectClass</td><td>A supported objectClass (Only User supported for now).</td></tr><tr><td>username</td><td>Names of attributes you would like to clear with <code>*</code> as the value. Supported attributes are: familyName, givenName, phones, organizations. When &#39;phones&#39; is present, all phones will be removed (e.g. workPhone, homePhone, mobilePhone). When &#39;organizations&#39; is present, all organization-related attributes will be cleared (e.g. orgName, orgTitle, orgDepartment, orgDescription, orgOffice).</td></tr></tbody></table><h3 id="removegroupmember" tabindex="-1">RemoveGroupMember <a class="header-anchor" href="#removegroupmember" aria-hidden="true">#</a></h3><p>Remove a user from a group.</p><h4 id="params-5" tabindex="-1">Params <a class="header-anchor" href="#params-5" aria-hidden="true">#</a></h4><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>groupId</td><td>Group ID</td></tr><tr><td>username</td><td>User&#39;s username</td></tr></tbody></table><h3 id="renameobject" tabindex="-1">RenameObject <a class="header-anchor" href="#renameobject" aria-hidden="true">#</a></h3><p>Rename an object (User, Group)</p><h4 id="params-6" tabindex="-1">Params <a class="header-anchor" href="#params-6" aria-hidden="true">#</a></h4><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>[groupId/username]</td><td>Current object ID</td></tr><tr><td>[newGroupId/newUsername]</td><td>New object ID</td></tr></tbody></table><h3 id="validateobject" tabindex="-1">ValidateObject <a class="header-anchor" href="#validateobject" aria-hidden="true">#</a></h3><p>Validate the specified object (User, Group, Alias, SendAs).</p><h4 id="params-7" tabindex="-1">Params <a class="header-anchor" href="#params-7" aria-hidden="true">#</a></h4><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>objectClass</td><td>A supported objectClass.</td></tr><tr><td>[objectId]</td><td>A field named for the objectClass appropriate naming attribute.</td></tr><tr><td>[fields]</td><td>objectClass specific fields.</td></tr></tbody></table><h3 id="validatepassword" tabindex="-1">ValidatePassword <a class="header-anchor" href="#validatepassword" aria-hidden="true">#</a></h3><p>Validate a user&#39;s password.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>It is best to use delay and single validation. Repeated validation can lead to account suspension, leading to difficulty in deleting the account.</p></div><h4 id="params-8" tabindex="-1">Params <a class="header-anchor" href="#params-8" aria-hidden="true">#</a></h4><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>username</td><td>User&#39;s username</td></tr><tr><td>password</td><td>User&#39;s password</td></tr></tbody></table><h2 id="google-object-attributes" tabindex="-1">Google Object Attributes <a class="header-anchor" href="#google-object-attributes" aria-hidden="true">#</a></h2><h3 id="user" tabindex="-1">User <a class="header-anchor" href="#user" aria-hidden="true">#</a></h3><table><thead><tr><th>Attribute Name</th><th>Attribute Data Type</th><th>Description</th></tr></thead><tbody><tr><td>objectClass</td><td></td><td>User</td></tr><tr><td>username</td><td>naming, single-valued, string</td><td>User ID</td></tr><tr><td><strong>givenName</strong></td><td>single-valued, string</td><td>The user&#39;s first name. Required when creating a user account.</td></tr><tr><td><strong>familyName</strong></td><td>single-valued, string</td><td>The user&#39;s last name. Required when creating a user account.</td></tr><tr><td><strong>password</strong></td><td>single-valued, string</td><td>Stores the password for the user account. The user&#39;s password value is required when creating a user account. It is optional when updating a user and should only be provided if the user is updating their account password.</td></tr><tr><td>suspended</td><td>single-valued, boolean</td><td>Indicates if the user is suspended.</td></tr><tr><td>mustChangePassword</td><td>single-valued, boolean</td><td>Require user to change password at next login</td></tr><tr><td>ou or orgUnitPath</td><td>single-valued, string</td><td>Organizational unit</td></tr><tr><td>orgName</td><td>single-valued, string</td><td>Organization name</td></tr><tr><td>orgTitle</td><td>single-valued, string</td><td>The user&#39;s title within the organization, for example &#39;member&#39; or &#39;engineer&#39;.</td></tr><tr><td>orgDepartment</td><td>single-valued, string</td><td>Specifies the department within the organization, such as &#39;sales&#39; or &#39;engineering&#39;.</td></tr><tr><td>orgDescription</td><td>single-valued, string</td><td>The description of the organization.</td></tr><tr><td>orgOffice</td><td>single-valued, string</td><td>The physical location of the organization. This does not need to be a fully qualified address.</td></tr><tr><td>workPhone</td><td>single-valued, string</td><td>The user&#39;s work phone number.</td></tr><tr><td>homePhone</td><td>single-valued, string</td><td>The user&#39;s home phone number.</td></tr><tr><td>mobilePhone</td><td>single-valued, string</td><td>The user&#39;s mobile phone number.</td></tr><tr><td>employeeId</td><td>single-valued, string</td><td>The user&#39;s Employee ID.</td></tr><tr><td>aliases</td><td>multi-valued, string</td><td>The user&#39;s email aliases.</td></tr><tr><td>includeInGlobalAddressList</td><td>single-valued, boolean</td><td>Indicates if the user&#39;s profile is visible in the G Suite global address list when the contact sharing feature is enabled for the domain.</td></tr></tbody></table><h3 id="group" tabindex="-1">Group <a class="header-anchor" href="#group" aria-hidden="true">#</a></h3><table><thead><tr><th>Attribute Name</th><th>Attribute Data Type</th><th>Description</th></tr></thead><tbody><tr><td>objectClass</td><td></td><td>Group</td></tr><tr><td>groupId</td><td>naming, single-valued, string</td><td>Group ID</td></tr><tr><td>groupName</td><td>single-valued, string</td><td>Group name. During creation, defaults to groupId value if not specified</td></tr><tr><td>groupDescription</td><td>single-valued, string</td><td>Group description</td></tr><tr><td>emailPermission</td><td>single-valued, string</td><td>Email permission for the group</td></tr><tr><td>groupMembers</td><td>multi-valued, string</td><td>Usernames of group members</td></tr></tbody></table><h3 id="alias" tabindex="-1">Alias <a class="header-anchor" href="#alias" aria-hidden="true">#</a></h3><p>Link to the <a href="https://developers.google.com/admin-sdk/directory/v1/reference/users/aliases#resource" target="_blank" rel="noreferrer">reference</a>.</p><table><thead><tr><th>Attribute Name</th><th>Attribute Data Type</th><th>Description</th></tr></thead><tbody><tr><td>objectClass</td><td></td><td>Alias</td></tr><tr><td><strong>userKey</strong></td><td>naming, single-valued, string</td><td>Identifies the user in the API request. The value can be the user&#39;s primary email address, alias email address, or unique user ID.</td></tr><tr><td><strong>alias</strong></td><td></td><td>The alias email address.</td></tr><tr><td>primaryEmail</td><td></td><td>The user&#39;s primary email address.</td></tr></tbody></table><h3 id="sendas" tabindex="-1">SendAs <a class="header-anchor" href="#sendas" aria-hidden="true">#</a></h3><p>Link to the <a href="https://developers.google.com/gmail/api/v1/reference/users/settings/sendAs#resource" target="_blank" rel="noreferrer">reference</a></p><table><thead><tr><th>Attribute Name</th><th>Attribute Data Type</th><th>Description</th></tr></thead><tbody><tr><td>objectClass</td><td></td><td>SendAs</td></tr><tr><td><strong>userId</strong></td><td>naming, single-valued, string</td><td>User&#39;s email address. The special value &quot;me&quot; can be used to indicate the authenticated user.</td></tr><tr><td>displayName</td><td>string</td><td>A name that appears in the &quot;From:&quot; header for mail sent using this alias. For custom &quot;from&quot; addresses, when this is empty, Gmail will populate the &quot;From:&quot; header with the name that is used for the primary address associated with the account.</td></tr><tr><td><strong>sendAsEmail</strong></td><td>string</td><td>The email address that appears in the &quot;From:&quot; header for mail sent using this alias. This is read-only for all operations except create.</td></tr><tr><td>replyToAddress</td><td>string</td><td>An optional email address that is included in a &quot;Reply-To:&quot; header for mail sent using this alias. If this is empty, Gmail will not generate a &quot;Reply-To:&quot; header.</td></tr><tr><td>signature</td><td>string</td><td>An optional HTML signature that is included in messages composed with this alias in the Gmail web UI.</td></tr><tr><td>isPrimary</td><td>boolean</td><td>Whether this address is the primary address used to login to the account. Every Gmail account has exactly one primary address, and it cannot be deleted from the collection of send-as aliases. This field is read-only.</td></tr><tr><td>isDefault</td><td>boolean</td><td>Whether this address is selected as the default &quot;From:&quot; address in situations such as composing a new message or sending a vacation auto-reply. Every Gmail account has exactly one default send-as address, so the only legal value that clients may write to this field is true. Changing this from false to true for an address will result in this field becoming false for the other previous default address.</td></tr><tr><td>treatAsAlias</td><td>boolean</td><td>Whether Gmail should treat this address as an alias for the user&#39;s primary email address. This setting only applies to custom &quot;from&quot; aliases.</td></tr></tbody></table><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h2><p>You can either configure this with a p12KeyFile <strong>or</strong> the <code>&lt;privateKey&gt;</code> from the json document.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The list of scopes is the recommended list. Depending on your use case, you may need to reduce the scopes list. For scopes required to execute various API calls consult the following:</p><ul><li><a href="https://developers.google.com/admin-sdk/directory/v1/reference/" target="_blank" rel="noreferrer">https://developers.google.com/admin-sdk/directory/v1/reference/</a></li><li><a href="https://developers.google.com/gmail/api/v1/reference/" target="_blank" rel="noreferrer">https://developers.google.com/gmail/api/v1/reference/</a></li><li><a href="https://developers.google.com/admin-sdk/licensing/v1/reference/" target="_blank" rel="noreferrer">https://developers.google.com/admin-sdk/licensing/v1/reference/</a></li></ul></div><p><strong>p12KeyFile</strong></p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki"><code><span class="line"><span style="color:#81A1C1;">&lt;connection&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;name&gt;</span><span style="color:#D8DEE9FF;">GApps</span><span style="color:#81A1C1;">&lt;/name&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;description&gt;</span><span style="color:#D8DEE9FF;">Connector to Google Apps</span><span style="color:#81A1C1;">&lt;/description&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;type&gt;</span><span style="color:#D8DEE9FF;">com.trivir.idmunit.connector.GoogleAppsConnector</span><span style="color:#81A1C1;">&lt;/type&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;superUserEmail&gt;</span><span style="color:#D8DEE9FF;">adminUser@domain.com</span><span style="color:#81A1C1;">&lt;/superUserEmail&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;serviceEmail&gt;</span><span style="color:#D8DEE9FF;">54444444455555-orqbc7gpi2c5k3tm2ci94eq3mmpdenlr@developer.gserviceaccount.com</span><span style="color:#81A1C1;">&lt;/serviceEmail&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;p12keyFile&gt;</span><span style="color:#D8DEE9FF;">Google-IdMUnit-Dev-1ee22e8066f0.p12</span><span style="color:#81A1C1;">&lt;/p12keyFile&gt;</span><span style="color:#D8DEE9FF;">      </span><span style="color:#616E88;">&lt;!-- You can also specifi the privateKey from the json instead. See below. --&gt;</span><span style="color:#D8DEE9FF;">        </span><span style="color:#81A1C1;">&lt;multiplier/&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;scopes&gt;</span><span style="color:#D8DEE9FF;">https://mail.google.com/,https://www.googleapis.com/auth/admin.directory.group,https://www.googleapis.com/auth/admin.directory.group.member,https://www.googleapis.com/auth/admin.directory.group.member.readonly,https://www.googleapis.com/auth/admin.directory.group.readonly,https://www.googleapis.com/auth/admin.directory.orgunit,https://www.googleapis.com/auth/admin.directory.orgunit.readonly,https://www.googleapis.com/auth/admin.directory.user,https://www.googleapis.com/auth/admin.directory.user.alias,https://www.googleapis.com/auth/admin.directory.user.alias.readonly,https://www.googleapis.com/auth/admin.directory.user.readonly,https://www.googleapis.com/auth/admin.directory.user.security,https://www.googleapis.com/auth/admin.directory.userschema,https://www.googleapis.com/auth/admin.directory.userschema.readonly,https://www.googleapis.com/auth/apps.licensing,https://www.googleapis.com/auth/gmail.modify,https://www.googleapis.com/auth/gmail.readonly,https://www.googleapis.com/auth/gmail.settings.basic,https://www.googleapis.com/auth/gmail.settings.sharing</span><span style="color:#81A1C1;">&lt;/scopes&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;substitutions/&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;data-injections/&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/connection&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>privateKey configuration</strong></p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki"><code><span class="line"><span style="color:#81A1C1;">&lt;connection&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;name&gt;</span><span style="color:#D8DEE9FF;">GApps</span><span style="color:#81A1C1;">&lt;/name&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;description&gt;</span><span style="color:#D8DEE9FF;">Connector to Google Apps</span><span style="color:#81A1C1;">&lt;/description&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;type&gt;</span><span style="color:#D8DEE9FF;">com.trivir.idmunit.connector.GoogleAppsConnector</span><span style="color:#81A1C1;">&lt;/type&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;superUserEmail&gt;</span><span style="color:#D8DEE9FF;">adminUser@domain.com</span><span style="color:#81A1C1;">&lt;/superUserEmail&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;serviceEmail&gt;</span><span style="color:#D8DEE9FF;">54444444455555-orqbc7gpi2c5k3tm2ci94eq3mmpdenlr@developer.gserviceaccount.com</span><span style="color:#81A1C1;">&lt;/serviceEmail&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;privateKey&gt;</span><span style="color:#D8DEE9FF;">-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCo+mMnlrND2ED8\\nrGunysbNI7ezDB2ABf08WN4qKcYECllReOD6QTWiLa6HxgO+zr/zgNas1GZsLY6/\\n6anyVPyMNohifLQIrCjSLIZEZ/3i3PxfbRKAwiexXyvVSwU4KQkVxbcVrcHO/aBX\\neP5bY+DRrQzYhaywNF2UY9xMwkcYoqZ8TZotC1SRh0R3ycYKBFbusa0GfQHgZC4A\\nsJOPF2re4ligO+IUEy6Xycd/HErepmktYF4gVAU9UO+CP1DJWZa0XCwGpVJgDc3n\\nEodmqM+WhJXEs81Tgt57chtRyHaTyHS478djIg5uzBgCt+Qvld0KpAk7qd+CUzOY\\nB4DVNtO7AgMBAAECggEABdO8n5zeybQnaY84lyyy9lgI+a+tRMDwHqih4KpYHcON\\nmPWmLHsbMmCI6D2321id3fPPc15PueNITO3t4mFz5BHtWhgazUHClpzadHlxk+Uy\\n/sdwH+iSHde+VzijEXC403th+OlpCY5NfTa67sPe+NwS2VSiw+DKaVeYPT1l3j+P\\nPUWfdynFVM28PWp7T6QP36RDbe37Sprwvdh3zUGeim1RbtSzlCiAgPUX3sDzw/m7\\ncBcVD7hqDLJN5tDa6S0Lvg47dpUV1A2+trZDiWco6Q7zyIx3atyrCmOykiE7Wn8P\\nFsotsQUr26abI0F8ibSj3i8HQlBl6MLQFqNCrwd2YQKBgQDkw/q05Tdqa7MrAIil\\n+StZ+4W9B1vRknozVKC0XmA0gD4f9A2Js8tGCbDHw5y7nggkLSco1WbyI7qSkrkG\\nwrC9+2GA8LTD1GWE8vL+rWC+bhwOhiBbkvSfdSqzr5NLZKM+rqsXpyQ2i+c587qL\\ng7es7C+6AE8Gk5p6KqNzwjbupQKBgQC9GEhkDwzy6wgWY+qAVcoXQ1q2NG9vq+fJ\\npgjjhqSoi4OdPkoqEBLSMCAnn1Am71gbHAewq7jElpolh+f2bRCAeGppS1fRBZbA\\n+P8cBKSwn5amHJC6xuOqg+4JLrCyPOsI+VwxaTQdkfas6cPTjWCAc079+bHRGTse\\nwb2dWliK3wKBgQDcwvNRVlHf9Qb13JIB+S6Iq10oSc2ltIEQv/5FkT2t7IQHOfFG\\njacAc6GRZYf+1kZtAtXjZezuhuQpRkYf7Am7jLdPQvpucK13Wyx78LyHiKKysWTQ\\nekRvDRakSC8QdpHCj7S0Iqujp+b/2eCPehDqYxK7oEiixBYzBqqtryJrsQKBgEsM\\nCh78Ai2erfUE7prEcZJN/wB1SwzM8w8KwFhcpZjm1fNgN1r+Shn1U62mAs+RCiyo\\nMT0iyg/rnX3rtFoO6w+xurnTVyTzzOMFb2oVRa97hvSiPaaDLPQNrDkkuKfkmXtU\\nTAyoLjDWL0ps9HVPlM8l9GHD6ZiNJPON/M0ogB+NAoGAFiu9S3+nkCPhVNBUWAzZ\\nGnkR+EOmVxzRaHFhwAI9jl9GbYGWO1B2MjQQUXmElGgLXOOOy1+y9dn+xr7o+Ewy\\nBubftKT9aFcXns3pcglhDsf+M4izizshAoEQ4D15EyLkdjYZVAPc8hrLqrcBZ42K\\nztLIe2zHj5gpxecvyn2JIzs=\\n-----END PRIVATE KEY-----</span><span style="color:#81A1C1;">&lt;/privateKey&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;scopes&gt;</span><span style="color:#D8DEE9FF;">https://mail.google.com/,https://www.googleapis.com/auth/admin.directory.group,https://www.googleapis.com/auth/admin.directory.group.member,https://www.googleapis.com/auth/admin.directory.group.member.readonly,https://www.googleapis.com/auth/admin.directory.group.readonly,https://www.googleapis.com/auth/admin.directory.orgunit,https://www.googleapis.com/auth/admin.directory.orgunit.readonly,https://www.googleapis.com/auth/admin.directory.user,https://www.googleapis.com/auth/admin.directory.user.alias,https://www.googleapis.com/auth/admin.directory.user.alias.readonly,https://www.googleapis.com/auth/admin.directory.user.readonly,https://www.googleapis.com/auth/admin.directory.user.security,https://www.googleapis.com/auth/admin.directory.userschema,https://www.googleapis.com/auth/admin.directory.userschema.readonly,https://www.googleapis.com/auth/apps.licensing,https://www.googleapis.com/auth/gmail.modify,https://www.googleapis.com/auth/gmail.readonly,https://www.googleapis.com/auth/gmail.settings.basic,https://www.googleapis.com/auth/gmail.settings.sharing</span><span style="color:#81A1C1;">&lt;/scopes&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;substitutions/&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;data-injections/&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/connection&gt;</span></span>
<span class="line"></span></code></pre></div><p>You can provide encrypted values in configuration by setting the &quot;encrypted&quot; attribute on a configuration element to &quot;true&quot;. For example: <code>&lt;privateKey encrypted=&quot;true&quot;&gt;A1bCD2EfgHi=&lt;/privateKey&gt;</code></p>`,61),n=[o];function d(i,l,p,c,h,g){return a(),e("div",null,n)}const b=t(r,[["render",d]]);export{m as __pageData,b as default};