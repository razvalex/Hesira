//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Hesira.Entities
{
    using System;
    using System.Collections.Generic;
    
    public partial class ConsultationRoom
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public int Type { get; set; }
        public string CUI { get; set; }
        public string CAS { get; set; }
        public bool Approved { get; set; }
        public string Decision { get; set; }
        public bool Current { get; set; }
    }
}
